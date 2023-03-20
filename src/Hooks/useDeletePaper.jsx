import { useQueryClient } from "@tanstack/react-query";

const useDeletePaper = (id) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newTitle) => axios.patch(`/posts/${id}`, { title: newTitle }),
    {
      // 💡 response of the mutation is passed to onSuccess
      onSuccess: (newPost) => {
        // ✅ update detail view directly
        queryClient.setQueryData(["posts", id], newPost);
      },
    }
  );
};

export default useDeletePaper;
