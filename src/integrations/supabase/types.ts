export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address: {
        Row: {
          address_id: number
          address_line: string
          city: string | null
          country: string | null
          created_at: string | null
          is_primary: boolean | null
          label: string | null
          postal_code: string | null
          province: string | null
          user_id: number
        }
        Insert: {
          address_id?: number
          address_line: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          is_primary?: boolean | null
          label?: string | null
          postal_code?: string | null
          province?: string | null
          user_id: number
        }
        Update: {
          address_id?: number
          address_line?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          is_primary?: boolean | null
          label?: string | null
          postal_code?: string | null
          province?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "address_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      blog_post: {
        Row: {
          author_id: number | null
          content: string | null
          created_at: string | null
          post_id: number
          title: string | null
          updated_at: string | null
        }
        Insert: {
          author_id?: number | null
          content?: string | null
          created_at?: string | null
          post_id?: number
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          author_id?: number | null
          content?: string | null
          created_at?: string | null
          post_id?: number
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      feedback: {
        Row: {
          comment: string | null
          created_at: string | null
          feedback_id: number
          rating: number | null
          request_id: number
          responded_at: string | null
          response: string | null
          user_id: number
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          feedback_id?: number
          rating?: number | null
          request_id: number
          responded_at?: string | null
          response?: string | null
          user_id: number
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          feedback_id?: number
          rating?: number | null
          request_id?: number
          responded_at?: string | null
          response?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "feedback_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "test_request"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      payment: {
        Row: {
          amount: number
          method: string
          paid_at: string | null
          payment_id: number
          request_id: number
          status: string | null
        }
        Insert: {
          amount: number
          method: string
          paid_at?: string | null
          payment_id?: number
          request_id: number
          status?: string | null
        }
        Update: {
          amount?: number
          method?: string
          paid_at?: string | null
          payment_id?: number
          request_id?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "test_request"
            referencedColumns: ["request_id"]
          },
        ]
      }
      profile: {
        Row: {
          address: string | null
          date_of_birth: string | null
          full_name: string | null
          gender: string | null
          profile_id: number
          user_id: number
        }
        Insert: {
          address?: string | null
          date_of_birth?: string | null
          full_name?: string | null
          gender?: string | null
          profile_id?: number
          user_id: number
        }
        Update: {
          address?: string | null
          date_of_birth?: string | null
          full_name?: string | null
          gender?: string | null
          profile_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      sample: {
        Row: {
          collected_by: number
          collection_time: string | null
          received_time: string | null
          request_id: number
          sample_id: number
          status: string | null
        }
        Insert: {
          collected_by: number
          collection_time?: string | null
          received_time?: string | null
          request_id: number
          sample_id?: number
          status?: string | null
        }
        Update: {
          collected_by?: number
          collection_time?: string | null
          received_time?: string | null
          request_id?: number
          sample_id?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sample_collected_by_fkey"
            columns: ["collected_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sample_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "test_request"
            referencedColumns: ["request_id"]
          },
        ]
      }
      sub_sample: {
        Row: {
          created_at: string | null
          description: string | null
          sample_id: number
          sub_sample_id: number
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          sample_id: number
          sub_sample_id?: number
        }
        Update: {
          created_at?: string | null
          description?: string | null
          sample_id?: number
          sub_sample_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "sub_sample_sample_id_fkey"
            columns: ["sample_id"]
            isOneToOne: false
            referencedRelation: "sample"
            referencedColumns: ["sample_id"]
          },
        ]
      }
      test_kit: {
        Row: {
          description: string | null
          is_active: boolean | null
          kit_id: number
          name: string
          stock_quantity: number | null
        }
        Insert: {
          description?: string | null
          is_active?: boolean | null
          kit_id?: number
          name: string
          stock_quantity?: number | null
        }
        Update: {
          description?: string | null
          is_active?: boolean | null
          kit_id?: number
          name?: string
          stock_quantity?: number | null
        }
        Relationships: []
      }
      test_request: {
        Row: {
          appointment_date: string | null
          collection_type: string | null
          created_at: string | null
          request_id: number
          service_id: number
          slot_time: string | null
          staff_id: number | null
          status: string | null
          user_id: number
        }
        Insert: {
          appointment_date?: string | null
          collection_type?: string | null
          created_at?: string | null
          request_id?: number
          service_id: number
          slot_time?: string | null
          staff_id?: number | null
          status?: string | null
          user_id: number
        }
        Update: {
          appointment_date?: string | null
          collection_type?: string | null
          created_at?: string | null
          request_id?: number
          service_id?: number
          slot_time?: string | null
          staff_id?: number | null
          status?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_request_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "test_service"
            referencedColumns: ["service_id"]
          },
          {
            foreignKeyName: "test_request_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "test_request_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      test_result: {
        Row: {
          approved_by: number | null
          approved_time: string | null
          request_id: number | null
          result_data: string | null
          result_id: number
          sample_id: number
          staff_id: number | null
          uploaded_by: number | null
          uploaded_time: string | null
        }
        Insert: {
          approved_by?: number | null
          approved_time?: string | null
          request_id?: number | null
          result_data?: string | null
          result_id?: number
          sample_id: number
          staff_id?: number | null
          uploaded_by?: number | null
          uploaded_time?: string | null
        }
        Update: {
          approved_by?: number | null
          approved_time?: string | null
          request_id?: number | null
          result_data?: string | null
          result_id?: number
          sample_id?: number
          staff_id?: number | null
          uploaded_by?: number | null
          uploaded_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "test_result_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "test_result_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "test_request"
            referencedColumns: ["request_id"]
          },
          {
            foreignKeyName: "test_result_sample_id_fkey"
            columns: ["sample_id"]
            isOneToOne: false
            referencedRelation: "sample"
            referencedColumns: ["sample_id"]
          },
          {
            foreignKeyName: "test_result_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "test_result_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      test_service: {
        Row: {
          description: string | null
          is_active: boolean | null
          kit_id: number
          name: string
          price: number | null
          service_id: number
        }
        Insert: {
          description?: string | null
          is_active?: boolean | null
          kit_id: number
          name: string
          price?: number | null
          service_id?: number
        }
        Update: {
          description?: string | null
          is_active?: boolean | null
          kit_id?: number
          name?: string
          price?: number | null
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_service_kit_id_fkey"
            columns: ["kit_id"]
            isOneToOne: false
            referencedRelation: "test_kit"
            referencedColumns: ["kit_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          password: string
          phone: string | null
          role: string | null
          updated_at: string | null
          user_id: number
          username: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          password: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: number
          username: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          password?: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: number
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
