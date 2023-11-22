export function format_address(address: string, n = 6) {
  if (address) {
    const first_part = address?.substring(0, n);
    const last_part = address?.substring(address.length - n);
    return `${first_part}[...]${last_part}`;
  }
  return 'error';
}
