import Cards from './components/cards';

function Page() {
  
  return (
    
      <div className='container border border-dark'>
        <div className='row '>
          <div className="col-md-2 text-dark d-flex align-items-center justify-content-center add shadow">adds</div>
          <div className="col-md-9"><Cards/></div>
        </div>
      </div>
      
    
  );
}

export default Page;
