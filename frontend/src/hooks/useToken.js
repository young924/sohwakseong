const useToken = () => {
  const token = localStorage.getItem("token");
  return `Token ${token}`;
};

export default useToken;
