export default function envariant(
  name: string,
  bag: Record<string, string | undefined> = process.env,
): string {
  const value = bag[name];

  if (!value) {
    throw new Error(`${name} is not defined in environment!`);
  }

  return value;
}
