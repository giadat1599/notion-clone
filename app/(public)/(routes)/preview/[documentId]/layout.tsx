import { PropsWithChildren } from "react";

const PublicLayout = ({ children }: PropsWithChildren) => {
  return <div className="h-full dark:bg-[#1f1f1f]">{children}</div>;
};

export default PublicLayout;
