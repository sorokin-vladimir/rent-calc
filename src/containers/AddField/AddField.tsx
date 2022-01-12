import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useStores } from '../../hooks';
import { InputNames } from '../../types';

export const AddField: FC = () => {
  const { billStore } = useStores();
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit } = useForm<InputNames>();
  const onSubmit = (
    data: Pick<InputNames, 'name' | 'description' | 'dimension' | 'tariff'>
  ) => {
    setShowForm(false);
    billStore.addField(data);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Field's name" register={register} name="name" />
          <Input label="Description" register={register} name="description" />
          <Input label="Dimension" register={register} name="dimension" />
          <Input
            type="number"
            label="Tariff"
            register={register}
            name="tariff"
            options={{ valueAsNumber: true }}
          />

          <Button type="submit">Create</Button>
          <Button onClick={() => setShowForm(false)} type="button">
            Hide
          </Button>
        </form>
      ) : (
        <Button onClick={() => setShowForm(true)} type="button">
          Add
        </Button>
      )}
    </div>
  );
};
