export interface ScorelineDataType {
    key: React.Key;
    arts: number;
    science: number;
    year: number;
}

export interface MajorDataType {
    key: React.Key;
    major: string[];
    majorGroup: string;
    admissionType: string;
    category: string;
    requirement: string;
    year: number;
    scoreLine: number;
}
