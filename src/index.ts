export default function envariant(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not defined in process.env!`);
  }

  return value;
}
