const values = [
    {name: 'Drew', text: 'First'},
    {name: 'Matthew', text: 'Second'},
    {name: 'Jon', text: 'Third'}
]

export const prerender = true;
export function load() {
    return {
        items: values
    }
}