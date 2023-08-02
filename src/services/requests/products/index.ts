import api from "../../config"

export const getProducts = async () => {
    const resp = await api.get('/products');
    return resp.data;
}
