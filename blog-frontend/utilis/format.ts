
export const formateDate = (dateString: string) => {
const date = new Date(dateString).toLocaleDateString('en-US',{
weekday:"long",
year:'numeric',
month:'long',
day:'numeric'
});
return date;
} 