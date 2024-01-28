import { HStack, Text, VStack } from "@chakra-ui/react";
import { useFirebaseAuthentication } from "../../Auth/auth";
import { elapsedTimeString } from "../../Helpers/dateHelpers";
import DeleteCommentButton from "./DeleteCommentButton";

const Comment = ({ comment, paper }) => {
  // get the current user
  const currentUser = useFirebaseAuthentication();

  // show delete comment button if the current user is the author of the comment or admin account
  const showDeleteCommentButton =
    currentUser &&
    (comment.sourceEmail === currentUser.email ||
      currentUser.email === "tang.wustl.edu@gmail.com");

  return (
    <VStack w="100%" align="flex-start" spacing="0px">
      <HStack spacing="6px" align="center">
        <Text fontSize="14px" opacity="0.8" fontWeight="extrabold">
          {comment.sourceEmail.split("@")[0]}
        </Text>
        <Text>·</Text>
        <Text fontSize="14px" opacity="0.6">
          {elapsedTimeString(comment.timeAdded)}
        </Text>
        {showDeleteCommentButton && (
          <DeleteCommentButton comment={comment} paper={paper} />
        )}
      </HStack>
      <Text fontSize="14px">{comment.text}</Text>
      {/* <Text fontSize="14px">{comment.score}</Text> */}
    </VStack>
  );
};

export default Comment;
