export default function formatDate(date) {
    const option = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(date).toLocaleDateString('en-US', option);
}