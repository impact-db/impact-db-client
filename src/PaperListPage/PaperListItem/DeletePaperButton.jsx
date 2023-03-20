import {
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebaseAuthentication } from "../../Auth/auth";
import {
  deletePaper,
  speciesToCollectionName,
} from "../../Helpers/databaseHelpers";
import { sendAdminEmail } from "../../Helpers/emailHelpers";

const DeletePaperButton = ({ paper }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  // get collectionName from url parameters
  const params = useParams();
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  // get the current user
  const currentUser = useFirebaseAuthentication();

  const deletePaperMutation = useMutation(
    ({ collectionName, paper }) => deletePaper(collectionName, paper),
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        // get the cached data for the paper array
        const paperArray = queryClient.getQueryData([
          "paperArray",
          collectionName,
        ]);

        // remove the deleted paper from the paper array
        const updatedPaperArray = paperArray.filter((_paper) => {
          return paper.slug !== _paper.slug;
        });

        // update the cache with the updated paper array
        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: `Success: "${paper.title}" has been deleted from the database.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // send email
        sendAdminEmail({
          subject: `ImpactDB: A ${species} paper was deleted by ${currentUser.email}`,
          html: `
          <div>
          <p>Title: ${paper.title}</p>
          <p>Abstract: ${paper.abstract}</p>
          <p>Journal: ${paper.journal}</p>
          <p>DOI: ${paper.doi}</p>
          <p>Publish Date: ${paper.date}</p>
          <p>Authors: ${paper.authors}</p>
          </div>
        `,
        });
      },
      onError: (err) => {
        console.log(err);

        toast({
          title: `Error: ${err}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
      // Always refetch after error or success:
      onSettled: () => {
        setLoading(false);
        onClose();
      },
    }
  );

  return (
    <>
      <Button size="sm" variant="ghost" colorScheme="red" onClick={onOpen}>
        DELETE
      </Button>

      {/* delete button modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr="30px">Delete "{paper.title}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt="0px">
            <Text>Please note that this action can not be undone.</Text>
          </ModalBody>

          <ModalFooter textAlign="center">
            <Button
              m="auto"
              colorScheme="red"
              isLoading={loading}
              onClick={async () => {
                deletePaperMutation.mutate({ collectionName, paper });
              }}
            >
              Delete Paper
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeletePaperButton;
