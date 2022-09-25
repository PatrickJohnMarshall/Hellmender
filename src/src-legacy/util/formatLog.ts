export default function formatLog(log: string[]) {
  const dosLines = log.map((line) => '>' + line);
  return dosLines.join('\n');
}
