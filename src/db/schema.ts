import { mysqlTable, text, int, serial, customType  } from "drizzle-orm/mysql-core";
import { createId } from '@paralleldrive/cuid2';

const cuid = customType<{ data: string | undefined; notNull: true }>({
    dataType() {
      return 'varchar(191)' // match prisma
    },
    toDriver(value?: string) {
      return value ?? createId()
    },
  })

export const events = mysqlTable("events", {
  id: cuid("id").primaryKey(),
  name: text("name").notNull()
});