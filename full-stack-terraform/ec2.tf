#ec2 생성
resource "aws_instance" "terraform-instance"{
    ami = "ami-092dfb48456a3b119"
    instance_type = "t2.micro"
    key_name = var.key_name
    subnet_id = aws_subnet.public1.id
    vpc_security_group_ids = [aws_security_group.public.id]
    associate_public_ip_address = true
    user_data = file("user_data.sh")
    lifecycle {
        create_before_destroy = true
    }
    tags = {
        "Name" = "terraform-instance"
    }
}
