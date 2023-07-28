import { VStack } from "@chakra-ui/react";
import Comment from "./Comment";

const CommentsList = ({ moleculeList, comments }) => {
  // show recent comments first
  comments.sort(function (a, b) {
    return parseInt(a.timeAdded) > parseInt(b.timeAdded) ? -1 : 1;
  });

  return (
    <VStack spacing="20px">
      {comments.map((comment, index) => {
        return (
          <Comment
            moleculeList={moleculeList}
            comments={comments}
            comment={comment}
            key={index}
          />
        );
      })}
    </VStack>
  );
};

export default CommentsList;
