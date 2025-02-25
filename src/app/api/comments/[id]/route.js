export async function GET() {
    return Response.json({
        comments
    })
}


export async function PATCH(request, { params }) {
    const body = await request.json();
    console.log(body)
    const { id } = await params;
    console.log(id)

    const index = comments.findIndex(c => c.id === parseInt(id));

    comments[index] = {
        id: id,
        des: body
    }

    return Response.json({
        comments
    })

}


export async function DELETE(request, { params }) {

    const { id } = await params;
    const newCommens = comments.filter(c => c.id !== parseInt(id));
    return Response.json({
        newCommens
    })

}



const comments = [
    {
        id: 1,
        des: 'hwllo there'
    },
    {
        id: 2,
        des: 'hwllo there'
    },
    {
        id: 3,
        des: 'hwllo there'
    }
]