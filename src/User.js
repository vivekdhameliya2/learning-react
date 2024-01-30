function User() {


let i = "Vivek"
function increament(){
    i ="Dhameliya";
    alert(i)
      
  }
  return (
    <div>
     <h1>Hello {i}</h1>
      <button onClick={
       
        increament
        }>Click On Me</button>
    </div>
  );
}




export default User;
