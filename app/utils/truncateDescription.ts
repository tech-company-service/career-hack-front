export const truncateDescription = (description: string, contentBorderLength: number): string => {
  return description.length > contentBorderLength
    ? `${description.substring(0, contentBorderLength)}...`
    : description
}