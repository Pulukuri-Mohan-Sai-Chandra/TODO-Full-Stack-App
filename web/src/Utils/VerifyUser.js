



export const verifyUser = async () => {

    try {

        let res = await fetch(import.meta.env.VITE_VERIFY_USER, {
            credentials: "include"
        })
        let data = await res.json();
        return data;
    }
    catch (e) {
        return { "message": e.message }
    }


}