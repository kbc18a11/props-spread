type Props = { message: string, no: number };

const ChildrenText = ({ message, no }: Props) => {
  return (
    <>
      <div>Message:{message}</div>
      <div>No:{no}</div>
    </>
  );
}

const App = () => {
  const displays = {
    message: 'あああああ',
    no: 114514
  };

  return (
    <div className="App" >
      <ChildrenText {...displays} />
    </div >
  );
}

export default App;
