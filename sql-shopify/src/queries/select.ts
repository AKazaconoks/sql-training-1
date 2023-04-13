export const selectCount = (table: string): string => {
  return `SELECT COUNT(*) AS c FROM ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `SELECT * FROM ${table} WHERE id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `SELECT * FROM categories WHERE title = "${title}"`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `SELECT * FROM apps_categories WHERE app_id = ${appId}`;
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `SELECT count(distinct ${columnName}) from ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `SELECT `;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `SELECT `;
};