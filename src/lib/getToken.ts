import { useAppSelector } from "@/redux/app/hook";

export const getToken = (): string | null => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return accessToken;
};
