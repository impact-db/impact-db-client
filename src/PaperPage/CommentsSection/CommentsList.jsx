import { VStack } from "@chakra-ui/react";
import Comment from "./Comment";

const CommentsList = ({ paper }) => {
  let comments = paper.comments;

  // show recent comments first
  comments.sort(function (a, b) {
    return parseInt(a.timeAdded) > parseInt(b.timeAdded) ? -1 : 1;
  });

  return (
    <VStack spacing="20px">
      {comments.map((comment, index) => {
        return <Comment comment={comment} paper={paper} key={index} />;
      })}
    </VStack>
  );
};

export default CommentsList;
