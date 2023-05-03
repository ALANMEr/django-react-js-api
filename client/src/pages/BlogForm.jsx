import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { deleteblogsApi, getblogsApixid, postblogsApi, updateblogsApi } from "../api/BlogApi";
/**
 * This is a React component that renders a form for creating or updating a blog post, with validation
 * and the ability to delete a post.
 * @returns The `BlogForm` component is being returned, which contains a form for creating or updating
 * a blog post, as well as a delete button if the user is updating an existing post.
 */
export const BlogForm = () => {

    const { register, handleSubmit, formState: { errors },
        setValue } = useForm();
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateblogsApi(params.id, data)
            toast.success("Tarea Actualizada", {
                position: "bottom-right",
                style: {
                    backgroundColor: "blue",
                    color: "#fff"
                },
            })
        } else {

            await postblogsApi(data)
            toast.success("Tarea creada", {
                position: "bottom-right",
                style: {
                    backgroundColor: "blue",
                    color: "#fff"
                },
            })

        }
        navigate("/blogs")
    })
    useEffect(() => {
        const loadBlog = async () => {
            if (params.id) {
                const res = await getblogsApixid(params.id)
                setValue("title", res.data.title)
                setValue("link", res.data.link)
            }
        }
        loadBlog();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title"
                    {...register("title", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 "
                />
                {errors.title && <span>Campo requerido</span>}
                <input type="text" placeholder="Link"
                    {...register("link", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 "
                />
                {errors.link && <span>Campo requerido</span>}
                <button className="bg-indigo-500 p-3 rounded-lg w-full mt-3">Save</button>

            </form>
          <div className="flex justify-end">
                {params.id && <button onClick={async () => {
                    const aceptar = window.confirm("Estas seguro?")
                    if (aceptar) {
                        await deleteblogsApi(params.id)
                        toast.success("Tarea eliminada", {
                            position: "bottom-right",
                            style: {
                                backgroundColor: "blue",
                                color: "#fff"
                            },
                        })
                        navigate("/blogs")
                    }
                }}

                    className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                >Delete</button>}
          </div>

        </div>
    )
}
