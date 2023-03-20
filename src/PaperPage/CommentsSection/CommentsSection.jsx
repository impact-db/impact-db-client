import { Heading, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AddCommentButton from "./AddCommentButton";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";

const CommentsSection = ({ paper }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <VStack align="flex-start" w="100%">
      <Heading fontSize="lg">
        {paper.comments.length} Comment{paper.comments.length === 1 ? "" : "s"}
      </Heading>
      {showForm ? (
        <AddCommentForm setShowForm={setShowForm} paper={paper} />
      ) : (
        <AddCommentButton setShowForm={setShowForm} />
      )}
      <Spacer minH="20px" />
      <CommentsList paper={paper} />
      <Spacer minH="100px" />
    </VStack>
  );
};

export default CommentsSection;
