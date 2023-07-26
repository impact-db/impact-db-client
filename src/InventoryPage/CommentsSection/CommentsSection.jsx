import { Heading, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AddCommentButton from "./AddCommentButton";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";

const CommentsSection = ({ moleculeList, comments }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <VStack align="flex-start" w="100%">
      <Heading fontSize="lg">
        {comments.length} Comment{comments.length === 1 ? "" : "s"}
      </Heading>
      {showForm ? (
        <AddCommentForm
          setShowForm={setShowForm}
          moleculeList={moleculeList}
          comments={comments}
        />
      ) : (
        <AddCommentButton setShowForm={setShowForm} />
      )}
      <Spacer minH="20px" />
      <CommentsList moleculeList={moleculeList} comments={comments} />
      <Spacer minH="100px" />
    </VStack>
  );
};

export default CommentsSection;
