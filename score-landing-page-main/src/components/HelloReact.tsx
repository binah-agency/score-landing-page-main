type HelloReactProps = {
  title: string;
};

export default function HelloReact({ title }: HelloReactProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">Componente React hidratado</p>
      <h2 className="mt-1 text-xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}
