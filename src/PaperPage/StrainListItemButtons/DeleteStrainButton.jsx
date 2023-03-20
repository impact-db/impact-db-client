import {
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useFirebaseAuthentication } from "../../Auth/auth";
import {
  deleteStrain,
  getPaperArray,
  haveSameData,
  speciesToCollectionName,
} from "../../Helpers/databaseHelpers";
import { sendAdminEmail } from "../../Helpers/emailHelpers";

const DeleteStrainButton = ({ strain }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const currentUser = useFirebaseAuthentication();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const params = useParams();
  const slug = params?.slug;
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  // get either cached or new paperArray data
  const { isLoading, data } = useQuery(
    ["paperArray", collectionName],
    ({ queryKey }) => getPaperArray(queryKey[1])
  );

  // set the value of the paper based on cached or fetched data
  let paper = {};
  let paperArray = [];
  let matchingStrains = [];
  if (data) {
    paperArray = data;

    paper = "not found";
    paperArray.forEach((_paper) => {
      if (_paper.slug === slug) {
        paper = _paper;
      }
    });

    // check if there are multiple strains that match this data item
    matchingStrains = paper.experimentalData.filter((_strain) =>
      haveSameData(strain, _strain)
    );
  }

  const deleteStrainMutation = useMutation(
    ({ collectionName, paper, strain }) =>
      deleteStrain(collectionName, paper, strain),
    {
      onSuccess: () => {
        // this is a bad temporary solution:
        location.reload();

        // make a version of the paper with the new strain added
        let updatedPaper = structuredClone(paper);
        // updatedPaper.experimentalData = updatedPaper.experimentalData.filter(
        //   (oldStrain) => {
        //     console.log(
        //       oldStrain.titer,
        //       !haveSameData(oldStrain, strain),
        //       oldStrain,
        //       strain
        //     );
        //     return !haveSameData(oldStrain, strain);
        //   }
        // );

        // get the index of the paper to update
        const slugs = paperArray.map((_paper) => _paper.slug);
        const indexToUpdate = slugs.indexOf(slug);

        // update the paper array
        const updatedPaperArray = structuredClone(paperArray);
        updatedPaperArray[indexToUpdate] = updatedPaper;

        // update cache with updated paper array
        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: "Success: Your strain has been deleted",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // send email
        sendAdminEmail({
          subject: `ImpactDB: A ${species} strain was deleted by ${currentUser.email}`,
          html: `
            <div>
              <p>Title: ${paper.title}</p>
              <p>Abstract: ${paper.abstract}</p>
              <p>Journal: ${paper.journal}</p>
              <p>DOI: ${paper.doi}</p>
              <p>Publish Date: ${paper.date}</p>
              <p>Authors: ${paper.authors}</p>
              <p>Link: https://impact-database.com/paper/${species}/${paper.slug}</p>
            </div>
          `,
        });

        // close the modal
        onClose();

        // this is a bad temporary solution:
        location.reload();
      },
      onError: (err) => {
        console.log(err);

        toast({
          title: `Error occured when attempting to delete strain.`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
    }
  );

  return (
    <>
      <Button size="sm" variant="ghost" colorScheme="red" onClick={onOpen}>
        DELETE
      </Button>

      {/* delete strain modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr="30px">Delete Strain</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt="0px">
            <Text>Please note that this action can not be undone.</Text>
            {/* give a warning if two or more strains will be deleted */}
            {matchingStrains.length > 1 && (
              <Alert status="error" mt="20px">
                <AlertIcon />
                Deleting this strain will delete {matchingStrains.length -
                  1}{" "}
                other strain{matchingStrains.length - 1 > 1 ? "s" : ""} with
                matching data
              </Alert>
            )}
          </ModalBody>

          <ModalFooter textAlign="center">
            <Button
              m="auto"
              colorScheme="red"
              isLoading={isLoading}
              onClick={async () => {
                deleteStrainMutation.mutate({ collectionName, paper, strain });
              }}
            >
              Delete Strain
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteStrainButton;
