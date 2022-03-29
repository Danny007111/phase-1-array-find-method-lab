// code your solution here
function superbowlWin(record){

    function superbowl(year){
        return year.result === "W";
        // if(year.result === "W"){
        // return true;
        // }else{
        // return false;
        // }
    };
  
    const winningYearObject = record.find(superbowl);

    if(winningYearObject){
        return winningYearObject.year;
    };
    
};