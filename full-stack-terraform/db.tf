/*
#DB subnet group 생성
resource "aws_db_subnet_group" "db_subnet_group" {
    name = "db_subnet_group"
    subnet_ids = [aws_subnet.private1.id, aws_subnet.private2.id]

    tags = {
      "Name" = "DB subnet group"
    }
}

#DB 생성
resource "aws_db_instance" "db" {
  allocated_storage    = 10
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t2.micro"
  name                 = "terraform_db"
  username             = "admin"
  password             = "12345678"
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  availability_zone = "ap-northeast-2b"
  db_subnet_group_name = aws_db_subnet_group.db_subnet_group.id
  vpc_security_group_ids = [aws_security_group.private.id]
}
*/