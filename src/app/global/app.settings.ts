export class AppSettings {
   public static get API_ENDPOINT(): string { return 'http://localhost:3000/api/v1'; }
   // public static get API_ENDPOINT(): string { return 'http://coletive-api-staging.herokuapp.com/api/v1'; }
   // public static get API_ENDPOINT(): string { return 'http://coletive-api-live.herokuapp.com/api/v1'; }

   public static get VIEW_ENDPOINT(): string { return 'http://coletive.cc/'; }

   public static get EMAIL_CATEGORY_ID(): number { return 2; }
}