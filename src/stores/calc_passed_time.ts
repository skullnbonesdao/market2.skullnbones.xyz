export function calc_passed_time(timestamp_to_get_since: number): string {
  const now = Date.now();
  const old:any = new Date(timestamp_to_get_since + "Z");
  const diffMs = now - old;
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  return diffDays + 'd, ' + diffHrs + 'h, ' + diffMins + 'min';
}
