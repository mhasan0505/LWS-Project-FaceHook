import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {

    console.log(formData);
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} 
          id="login-form"
          className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${errors.email ? "border-red-500" : "border-gray-500"}`}
          name="email"
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${errors.password ? "border-red-500" : " border-gray-500"}`}
          name="password"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </Field>
      <button
        className="auth-input bg-lwsGreen font-bold text-white transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
