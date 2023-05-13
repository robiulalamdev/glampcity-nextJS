
const useAsync = ({ action }) => {
    action
        .then(res => console.log(res))
};

export default useAsync;