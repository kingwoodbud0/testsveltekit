export const prerender = true;
export function load({params}){
    return {
        title: params.slug
    }
}