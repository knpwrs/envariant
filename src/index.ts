export default function envariant(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bag: any = process.env,
): string {
  const value = bag[name];

  if (!value) {
    throw new Error(`${name} is not defined in environment!`);
  }

  return value;
}
