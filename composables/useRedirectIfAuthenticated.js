export const useRedirectIfAuthenticated = (url = "/") => {
  const user = useSupabaseUser();
  watch(
    user,
    (user) => {
      if (user) {
        return navigateTo(url, { external: true });
      }
    },
    { immediate: true }
  );
  return { user };
};
