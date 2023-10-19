
export const formateDate = (dateString: string) => {
const date = new Date(dateString).toLocaleDateString('en-US',{
weekday:"long",
year:'numeric',
month:'long',
day:'numeric'
});
return date;
} 


// for debounce
export function debounce(func: (query:string)=>void, delay:number) {
    let timeoutId:NodeJS.Timeout;
  
    return  (...args: any) => {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }