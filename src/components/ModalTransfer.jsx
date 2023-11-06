import EnterPin from "./modalTransfer/EnterPin";

function ModalTransfer({
  /*  eslint-disable-next-line react/prop-types */
  modalTransfer: { status, body },
  closeModalTransfer,
}) {
  console.log(status);
  const data = body
  // console.log(body);
  const switchModal = () => {
    switch (status) {
      case "transfer":
        return <EnterPin data={data}/>;
        // eslint-disable-next-line no-unreachable
        break;
      case "success":
        return <Success />;
        // eslint-disable-next-line no-unreachable
        break;
      case "failed":
        return <Failed />;
        // eslint-disable-next-line no-unreachable
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="bg-gray-200 justify-center items-center h-screen opacity-100 absolute z-10 font-montserrat"
      id="logoutModal"
    >
      <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center px-[10px] md:px-0">
        {switchModal()}
      </div>
    </div>
  );
}

export default ModalTransfer;
