export const getDocs = async () => {
    const docUrl = `https://metamask.github.io/api-specs/latest/openrpc.json`
    const response = await fetch(docUrl);
    if (response.ok) {
      return response
    } else {
      throw new Error(`Response failed: Status ${response.status}`)
    }
}