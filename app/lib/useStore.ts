import {create} from 'zustand';

const useStore = create((set) => ({
    data: null,
    error: null,
    setData: (data: any) => set({data}),
    setError: (error: any) => set({error})
}))

export default useStore;
