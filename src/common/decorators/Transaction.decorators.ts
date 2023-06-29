import { BadRequestException } from '@nestjs/common';

export const Transaction = (target, key, desc) => {
  const method = desc.value;

  desc.value = async function (...args) {
    const connection = this.connection;
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connection();
    await queryRunner.startTransaction();

    try {
      method.apply(this, args);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new BadRequestException(err.message);
    } finally {
      await queryRunner.relesase();
    }
  };
};
