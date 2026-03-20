import { useState } from "react"
import AppButton from "../components/AppButton"
import "../styles/Login.css"

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [blurred, setblurred] = useState({ email: false, password: false })
    const [submitted, setSubmitted] = useState(false)

    const errors = {
        email: !form.email.includes("@") || !form.email.includes(".")
            ? 'El email debe incluir "@" y un domain. Ej: nombre@correo.com' : "",
        password: form.password.length > 0 && form.password.length < 8
            ? "La contraseña debe tener al menos 8 caracteres.": "",
    }

    const isEmpty = !form.email.trim() || !form.password.trim()
    const hasErrors = !!errors.email || !!errors.password

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function onBlur(e) {
        setblurred({ ...blurred, [e.target.name]: true })
    }

    function onSubmit(e) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="login-wrapper">

            <div className="login-hero">
                <h2>Domina React.<br />Desde cero<br />hasta senior.</h2>
                <p>Únete a más de 1,000 estudiantes que ya están transformando la web.</p>
            </div>

            <div className="login-card">
                <h1>Ingresar</h1>
                <p>Solo interfaz — no valida credenciales reales.</p>

                <form className="login-form" onSubmit={onSubmit} noValidate>

                    <div className="login-field">

                        <label htmlFor="email"> Correo electrónico <span className="login-required" aria-hidden="true"> *</span>
                        
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            autoComplete="email"
                            value={form.email}
                            onChange={onChange}
                            onBlur={onBlur}
                            disabled={submitted}
                            required
                            aria-invalid={blurred.email && !!errors.email}
                            aria-describedby={blurred.email && errors.email ? "error-email" : undefined}
                        />
                        {blurred.email && errors.email && (
                            <p id="error-email" className="login-error" role="alert">{errors.email}</p>
                        )}
                    </div>

                    <div className="login-field">
                        <label htmlFor="password">Contraseña <span className="login-required" aria-hidden="true"> *</span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            value={form.password}
                            onChange={onChange}
                            onBlur={onBlur}
                            disabled={submitted}
                            required
                            aria-invalid={blurred.password && !!errors.password}
                            aria-describedby={blurred.password && errors.password ? "error-password" : undefined}
                        />
                        {blurred.password && errors.password && (
                            <p id="error-password" className="login-error" role="alert">{errors.password}</p>
                        )}
                    </div>

                    <AppButton text={submitted ? "Enviando..." : "Ingresar"} disabled={isEmpty || hasErrors || submitted} type="submit"/>
                </form>
            </div>

        </div>
    )
}   