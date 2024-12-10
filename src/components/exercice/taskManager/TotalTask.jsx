function TotalTask(props) {

    return (
      <>
        <hr />
        <p style={{ color: 'green' }} >Total des tâches: {props.nbTotalTask}</p>
      </>
    );
  }
  
  export default TotalTask;