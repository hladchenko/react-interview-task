import { Button, Spinner, Table } from "react-bootstrap";
import { useState } from "react";

const CatFacts = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    const response = await fetch("https://meowfacts.herokuapp.com?count=5");
    const { data: facts } = await response?.json();
    setData(facts);
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={handleOnClick}>
        Get cat facts {isLoading && <Spinner size="sm" />}
      </Button>
      {data && (
        <Table style={{ marginTop: 20 }} striped bordered hover>
          <thead>
            <tr>
              <th id="index">#</th>
              <th id="fact">Fact</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((fact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fact}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CatFacts;
