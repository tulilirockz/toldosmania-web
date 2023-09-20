import type { JSX, ParentComponent, VoidComponent } from "solid-js";

export const INPUT_FIELD_STYLE =
  "input input-bordered input-primary input-md bg-base-300 text-base-content join-item";

export const InputField: VoidComponent<{ id: string, text: string, placeholder?: string, onInput: JSX.EventHandler<HTMLInputElement, InputEvent> }> = (props) => {
  return (
    <div class="m-3 flex w-full max-w-xl flex-col">
      <label for={props.id} class="text-base-content">
        {props.text}
      </label>
      <input
        id={props.id}
        type="text"
        class={INPUT_FIELD_STYLE}
        placeholder={props.placeholder}
        onInput={props.onInput}
      />
    </div>
  );
};

export const RequiredInputField: VoidComponent<{ id: string, text: string, placeholder?: string, autocomplete?: string, onInput: JSX.EventHandler<HTMLInputElement, InputEvent> }> = (props) => {
  return (
    <div class="m-3 flex w-full max-w-xl flex-col">
      <label for={props.id} class="text-base-content">
        <div class="badge badge-error badge-sm mr-1"></div>
        {props.text}
      </label>
      <input
        id={props.id}
        type="text"
        class={`${INPUT_FIELD_STYLE} required-element`}
        placeholder={props.placeholder}
        onInput={props.onInput}
        autocomplete={props.autocomplete}
        required
      />
    </div>
  );
};

export const RadioContainer: ParentComponent<{ labelText: string, labelId: string; }> = (props) => {
  return (
    <InputField text={props.labelText} id={props.labelId}>
      <div class="rounded-xl border border-primary-focus bg-base-300 p-3">
        {props.children}
      </div>
    </InputField>
  );
};

export const RadioForm: VoidComponent<{ title: string, name: string, checked: boolean, onInput: JSX.EventHandler<HTMLInputElement, InputEvent> }> = (props) => {
  return (
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text text-base-content">{props.title}</span>
        <input
          type="radio"
          name="tipo_toldo"
          class="radio checked:bg-primary-focus"
          checked={props.checked}
          onInput={props.onInput}
        />
      </label>
    </div>
  );
};