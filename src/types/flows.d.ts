interface Flow {
  id: number;
  responsibilities: Array<Responsibility>;
}

interface Responsibility {
  provided: string;
  required: string;
}
