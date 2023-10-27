import NextLink from "next/link";

const LinkNoPrefetch = ({
  children,
  ...rest
}: Parameters<typeof NextLink>[0]) => {
  return (
    <NextLink prefetch={false} {...rest}>
      {children}
    </NextLink>
  );
};

export default LinkNoPrefetch;
