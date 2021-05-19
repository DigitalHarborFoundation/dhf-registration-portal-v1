export interface Image {
  id?: string;
  url?: string;
}

export interface ProgramInstanceDataProps {
  data: {
    id?: string;
    fields?: {
      Age?: Array<string>;
      Capacity?: string;
      Dates?: string;
      Days?: Array<string>;
      "Enrolled Youth"?: number;
      "Featured Image"?: Array<Image>;
      Name?: string;
      Program?: Array<string>;
      "Program Code"?: string;
      Registrants?: Array<string>;
      "Registration Form URL"?: string;
      "Seats Available"?: number;
      Session?: string;
      Tag?: string;
      Times?: Array<string>;
      "Total Seats"?: number;
      "Waitlist Form URL"?: string;
      Year?: number;
      recordId?: string;
    };
  };
}

export interface ProgramDataProps {
  data: {
    id?: string;
    fields?: {
      Age?: Array<string>;
      "Course Type"?: string;
      Days?: Array<string>;
      Description?: string;
      "Detailed Program Description"?: string;
      "Featured Image"?: Array<Image>;
      Name?: string;
      Pathway?: string;
      "Program Instances": Array<string>;
      "Program Code"?: string;
      Sessions?: Array<string>;
      Times?: string;
      name_api_lookup?: string;
      record_id?: string;
    };
  };
}
